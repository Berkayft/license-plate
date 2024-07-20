import csv


input_file = 'test.csv'

output_file = 'importFile.csv'

selected_indices = [5]

added_values = []

with open(input_file, mode='r', newline='') as infile:
    reader = csv.reader(infile)
    with open(output_file, mode='w', newline='') as outfile:
        writer = csv.writer(outfile)
        for row in reader:
            try:
                selected_row = [row[i] for i in selected_indices]
                if selected_row not in added_values:
                    writer.writerow(selected_row)
                    added_values.append(selected_row)
            except IndexError:
                print(f"Bir satırda {selected_indices[0]} indeksli eleman yok.")

print(f'{output_file} dosyasına {selected_indices} indekslerindeki elemanlar kaydedildi.')

