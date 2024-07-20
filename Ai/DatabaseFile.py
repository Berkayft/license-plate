import pandas as pd

input_file = 'license_plate_data.csv'
output_file = 'output_file.csv'

df = pd.read_csv(input_file)

unique_records = []

seen_car_ids = set()
seen_license_numbers = set()

for index, row in df.iterrows():
    car_id = row['car_id']
    license_number = row['license_plate_number']

    if car_id not in seen_car_ids and license_number not in seen_license_numbers:
        unique_records.append(row)
        seen_car_ids.add(car_id)
        seen_license_numbers.add(license_number)

df_unique = pd.DataFrame(unique_records)

df_unique.to_csv(output_file, index=False)

print(f"İşlem tamamlandı. Sonuç {output_file} dosyasına kaydedildi.")

