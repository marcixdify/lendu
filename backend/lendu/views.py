from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Notices
from .serializers import NoticeSerializer
from rest_framework.parsers import JSONParser

# Create your views here.


# @csrf_exempt
# def noticeApi(request, id=0):
#     if request.method=='GET':
#         notices = Notices.objects.all()
#         notices_serializer=NoticeSerializer(notices,many=True)
#         return JsonResponse(notices_serializer.data,safe=False)
#     elif request.method=='POST':
#         notice_data=JSONParser().parse(request)
#         notices_serializer=NoticeSerializer(data=notice_data)
#         if notices_serializer.is_valid():
#             notices_serializer.save()
#             return JsonResponse('Dodano pomyslnie',safe=False)
#         return JsonResponse("Bledne dodanie", safe=False)
#     elif request.method=='PUT':
#         notice_data=JSONParser().parse(request)
#         notice=Notices.objects.get(NoticeId=notice_data['NoticeId'])
#         notices_serializer=NoticeSerializer(notice,data=notice_data)
#         if notices_serializer.is_valid():
#             notices_serializer.save()
#             return JsonResponse("Zaktualizowano pomyslnie", safe=False)
#         return JsonResponse("Bład w aktualizacji")
#     elif request.method=='DELETE':
#         notice= Notices.objects.get(NoticeId=id)
#         notice.delete()
#         return JsonResponse('Usuwanie przebieglo pomyslnie', safe=False)

@api_view(['GET'])
def getRoutes (request):
    return Response('Our Api')


@api_view(['GET'])
def getNotices (request):
    notices = Notices.objects.all()
    serializer = NoticeSerializer(notices, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getNotice (request, pk):
    notices = Notices.objects.get(NoticeId=pk)
    serializer = NoticeSerializer(notices, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def updateNotice(request,pk):
    data = request.data
    notice = Notices.objects.get(NoticeId=pk)
    serializer = NoticeSerializer(instance=notice, data=data)

    if serializer.is_valid():
        serializer.save()
        
    return Response(serializer.data)


@api_view(['DELETE'])
def deleteNotice(request,pk):
    notice = Notices.objects.get(NoticeId=pk)
    notice.delete()
    return Response("Ogłoszenie usuniete")


# @api_view(['POST'])
# def createNotice(request):
    # data = request.data
    # notice = Notices.objects.create(
    #     NoticeTitle=data['NoticeTitle'],
    #     NoticeDescription=data['NoticeDescription']
    # )
    # serializer = NoticeSerializer(notice, many=False)
        
    # return Response(serializer.data)
    # notice_data=JSONParser().parse(request)
    # notices_serializer=NoticeSerializer(data=notice_data)
    # if notices_serializer.is_valid():
    #     NoticeSerializer.save()
    #     return Response('Dodano pomyslnie',safe=False)
    # return Response("Bledne dodanie", safe=False)



@api_view(['POST'])
def createNotice(request):
    serializer = NoticeSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)