# here we can write the code to extract the CSV content 
# into a python dict
import csv

def extract_data_from_csv(filename):
    with open(filename, newline='') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')

        data = []

        for row in rows:
            data.append(row)
        return data
