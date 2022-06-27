from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import  Notice, NoticeLike
from .serializers import NoticeSerializer, NoticeLikeSerializer
from rest_framework.parsers import JSONParser
from rest_framework import viewsets, permissions
from rest_framework.permissions import AllowAny, IsAuthenticated
from .permissions import IsAuthorOrReadOnly
from django.shortcuts import get_object_or_404




@api_view(['GET'])
def getRoutes (request):
    return Response('Our Api')


# @api_view(['GET'])
# def getNotices (request):
#     notices = Notices.objects.all()
#     serializer = NoticeSerializer(notices, many=True)
#     return Response(serializer.data)


# class getNotice (generics.RetrieveUpdateDestroyAPIView):
#     """
#     Get, Update, Delete a recipe
#     """
#     queryset = Recipe.objects.all()
#     serializer_class = RecipeSerializer
#     permission_classes = (IsAuthorOrReadOnly,)





# class updateNotice(generics.RetrieveUpdateDestroyAPIView):
#     """
#     Get, Update, Delete a recipe
#     """
#     queryset = Notices.objects.all()
#     serializer_class = NoticeSerializer
#     permission_classes = (IsAuthorOrReadOnly,)


# @api_view(['DELETE'])
# def deleteNotice(request,pk):
#     notice = Notices.objects.get(NoticeId=pk)
#     notice.delete()
#     return Response("Ogłoszenie usuniete")



# class createNotice(generics.CreateAPIView):
#     """
#     Create: a recipe
#     """
#     queryset = Notices.objects.all()
#     serializer_class = NoticeSerializer
#     permission_classes = (IsAuthenticated,)

#     def perform_create(self, serializer):
#         serializer.save(NoticeOwner=self.request.user)


# class NoticeLikeAPIView(generics.CreateAPIView):
#     """
#     Like, Dislike a recipe
#     """
#     serializer_class = NoticeLikeSerializer
#     permission_classes = (IsAuthenticated,)

#     def post(self, request, pk):
#         notice = get_object_or_404(Notices, id=self.kwargs['pk'])
#         new_like, created = NoticeLike.objects.get_or_create(
#             user=request.user, notice=notice)
#         if created:
#             new_like.save()
#             return Response(status=status.HTTP_201_CREATED)
#         return Response(status=status.HTTP_400_BAD_REQUEST)

#     def delete(self, request, pk):
#         notice = get_object_or_404(Notices, id=self.kwargs['pk'])
#         like = NoticeLike.objects.filter(user=request.user, notice=notice)
#         if like.exists():
#             like.delete()
#             return Response(status=status.HTTP_200_OK)
#         return Response(status=status.HTTP_400_BAD_REQUEST)

#     def perform_create(self, serializer):
#         serializer.save(NoticeOwner=self.request.user)


class NoticeListAPIView(generics.ListAPIView):
    """
    Get: a collection of recipes
    """
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    permission_classes = (AllowAny,)
    filterset_fields = ('category__name', 'author__username')


class NoticeCreateAPIView(generics.CreateAPIView):
    """
    Create: a recipe
    """
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(NoticeOwner=self.request.user)


class  NoticeAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Get, Update, Delete a recipe
    """
    queryset = Notice.objects.all()
    serializer_class = NoticeSerializer
    permission_classes = (IsAuthorOrReadOnly,)


class  NoticeLikeAPIView(generics.CreateAPIView):
    """
    Like, Dislike a recipe
    """
    serializer_class = NoticeSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, pk):
        notice = get_object_or_404(Notice, id=self.kwargs['pk'])
        new_like, created = NoticeLike.objects.get_or_create(
            user=request.user, notice=notice)
        if created:
            new_like.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        notice = get_object_or_404(Notice, id=self.kwargs['pk'])
        like = NoticeLike.objects.filter(user=request.user, notice=notice)
        if like.exists():
            like.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)

    def perform_create(self, serializer):
        serializer.save(NoticeOwner=self.request.user)

