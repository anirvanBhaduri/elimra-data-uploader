from abc import ABC, abstractclassmethod

class CSVReaderInterface(ABC):
    @abstractclassmethod
    def getData(self):
        pass

    @abstractclassmethod
    def getLatestTimestamp(self):
        pass

    @abstractclassmethod
    def getViscosityUnit(self):
        pass

    @abstractclassmethod
    def getTemperatureUnit(self):
        pass

    @abstractclassmethod
    def getModelName(self):
        pass

    @abstractclassmethod
    def getSerialNo(self):
        pass

    @abstractclassmethod
    def getManufacturer(self):
        pass