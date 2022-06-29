import time
from datetime import datetime

class Checksum():
    def calculate(user1_time,user2_time,user1,user2):
        user1_time = round(int(user1_time.timestamp())*1000000)
        user2_time = round(int(user2_time.timestamp())*1000000)
        user1_chat_id = int(str(user1)+str(user1_time))
        user2_chat_id = int(str(user2)+str(user2_time))

        user1_chat_checksum = user1_chat_id % user1
        user2_chat_checksum = user2_chat_id % user2

        user1_checksum_hex = str(hex(user1_chat_checksum))
        user2_checksum_hex = str(hex(user2_chat_checksum))
        checksum_hex = user1_checksum_hex + user2_checksum_hex
        return checksum_hex

    def check_checksum(identifier, date_joined, id_conversation):
        date_joined = round(int(date_joined.timestamp())*1000000)
        user_chat_id = int(str(identifier)+str(date_joined))
        user_chat_checksum = user_chat_id % identifier
        user_chat_checksum = str(hex(user_chat_checksum))
        if str(user_chat_checksum) not in str(id_conversation):
            return False
        else:
            return True

