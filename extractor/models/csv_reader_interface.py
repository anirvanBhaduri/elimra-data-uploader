from abc import ABC, abstractclassmethod

class CSVReaderInterface(ABC):
    @abstractclassmethod
    def getData(self):
        pass