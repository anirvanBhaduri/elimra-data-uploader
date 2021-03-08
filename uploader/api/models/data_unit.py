class DataUnit():
    def __init__(self, period, measurement, timestamp):
        self.period = period
        self.measurement = measurement
        self.timestamp = timestamp
    
    def asDict(self):
        return {
            'period': self.period,
            'measurement': self.measurement,
            'timestamp': self.timestamp,
        }