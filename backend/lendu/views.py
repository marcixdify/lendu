from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from lendu.models import Notices
from lendu.serializers import NoticeSerializer

# Create your views here.


@csrf_exempt
def noticeApi(request, id=0):
    if request.method=='GET':
        notices = Notices.objects.all()
        notices_serializer=NoticeSerializer(notices,many=True)
        return JsonResponse(notices_serializer.data,safe=False)
    elif request.method=='POST':
        notice_data=JSONParser().parse(request)
        notices_serializer=NoticeSerializer(data=notice_data)
        if notices_serializer.is_valid():
            notices_serializer.save()
            return JsonResponse('Dodano pomyslnie',safe=False)
        return JsonResponse("Bledne dodanie", safe=False)
    elif request.method=='PUT':
        notice_data=JSONParser().parse(request)
        notice=Notices.objects.get(NoticeId=notice_data['NoticeId'])
        notices_serializer=NoticeSerializer(notice,data=notice_data)
        if notices_serializer.is_valid():
            notices_serializer.save()
            return JsonResponse("Zaktualizowano pomyslnie", safe=False)
        return JsonResponse("Bład w aktualizacji")
    elif request.method=='DELETE':
        notice= Notices.objects.get(NoticeId=id)
        notice.delete()
        return JsonResponse('Usuwanie przebieglo pomyslnie', safe=False)