class Channel():
    def __init__(self, name, unit, dataUnits=[]):
        self.name = name
        self.unit = unit
        self.dataUnits = dataUnits

    def getName(self):
        return self.name

    def addDataUnit(self, dataUnit):
        self.dataUnits.append(dataUnit)

    def replaceDataUnits(self, dataUnits):
        self.dataUnits = dataUnits

    def asDict(self):
        return {
            'name': self.name,
            'unit': self.unit,
            'floatData': [ unit.asDict() for unit in self.dataUnits ],
        }
