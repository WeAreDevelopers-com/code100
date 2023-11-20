import json

data = json.load(open('events.json'))

columns = data['columns']
pad_char = data['padChar']

print(pad_char * columns)

for event in data['events']:
    name = event.get('name', '')
    location = event.get('location', '')
    date = event.get('date', '')
    
    # Calculate the remaining space after printing name and date
    remaining_space = columns - len(name) - len(date) - 6  # 3 spaces for padding either side
    
    # Split the remaining space for location and padding
    location_space = remaining_space - len(location)
    left_padding = location_space // 2
    right_padding = location_space - left_padding
    
    # Construct the formatted line
    line = f" {pad_char} {name} {pad_char * left_padding}{location}{pad_char * right_padding}{date} {pad_char} "
    print(line)
    
print(pad_char * columns)
