class Device():
    def __init__(self, model, serialNo, channels=[]):
        self.model = model
        self.serialNo = serialNo
        self.channels = channels
    
    def getModel(self):
        return self.model
    
    def getSerialNumber(self):
        return self.serialNo

    def getChannels(self):
        return self.channels

    def addChannel(self, channel):
        self.channels.append(channel)

    def clearChannels(self):
        self.channels = []

    def asDict(self):
        return {
            'model': self.model,
            'serialNo': self.serialNo,
            'channels': [ channel.asDict() for channel in self.channels ],
        }