from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Notices, NoticeLike
from .serializers import NoticeSerializer, NoticeLikeSerializer
from rest_framework.parsers import JSONParser
from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from .permissions import IsAuthorOrReadOnly
from django.shortcuts import get_object_or_404

#from .serializers import TodoSerializer
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

# @api_view(['PUT'])
# def updateNotice(request,pk):
#     data = request.data
#     notice = Notices.objects.get(NoticeId=pk)
#     serializer = NoticeSerializer(instance=notice, data=data)

#     if serializer.is_valid():
#         serializer.save()
        
#     return Response(serializer.data)



class updateNotice(generics.RetrieveUpdateDestroyAPIView):
    """
    Get, Update, Delete a recipe
    """
    queryset = Notices.objects.all()
    serializer_class = NoticeSerializer
    permission_classes = (IsAuthorOrReadOnly,)


@api_view(['DELETE'])
def deleteNotice(request,pk):
    notice = Notices.objects.get(NoticeId=pk)
    notice.delete()
    return Response("Ogłoszenie usuniete")



class createNotice(generics.CreateAPIView):
    """
    Create: a recipe
    """
    queryset = Notices.objects.all()
    serializer_class = NoticeSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(NoticeOwner=self.request.user)


class NoticeLikeAPIView(generics.CreateAPIView):
    """
    Like, Dislike a recipe
    """
    serializer_class = NoticeLikeSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        notice = get_object_or_404(Notices, id=self.kwargs['pk'])
        new_like, created = NoticeLike.objects.get_or_create(
            user=request.user, notice=notice)
        if created:
            new_like.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        notice = get_object_or_404(Notices, id=self.kwargs['pk'])
        like = NoticeLike.objects.filter(user=request.user, notice=notice)
        if like.exists():
            like.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(NoticeOwner=self.request.user)


# @api_view(['POST'])
# def createNotice(request):
#     serializer = NoticeSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#         return Response(serializer.data)
#     return Response(serializer.errors)



# class TodoViewSet(viewsets.ModelViewSet):
#     # queryset = Todo.objects.all()  # remove
#     serializer_class = TodoSerializer
#     permission_classes = [permissions.IsAuthenticated]  # added

#     def get_queryset(self):  # added
#         return self.request.user.todos.all()

#     def perform_create(self, serializer):  # added
#         serializer.save(owner=self.request.user)