class DataRow():
    def __init__(self, timestamp, viscosity, temperature):
        self.timestamp = timestamp
        self.viscosity = float(viscosity)
        self.temperature = float(temperature)

    def getTimestamp(self):
        return self.timestamp

    def getViscosity(self):
        return self.viscosity

    def getTemperature(self):
        return self.temperature