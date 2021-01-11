# here we can write the code to upload the data to some persistence
from ftplib import FTP

import os

ftpServer = os.getenv('FTP_SERVER_URL')
ftpServerUsername=os.getenv('FTP_SERVER_USERNAME')
ftpServerPassword=os.getenv('FTP_SERVER_PASSWORD')

def upload_data(data):
    ftp = FTP(ftpServer, ftpServerUsername, ftpServerPassword)
    ftp.dir()
