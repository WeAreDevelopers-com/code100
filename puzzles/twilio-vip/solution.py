def determine_encoding_and_length(message):
    # GSM-7 character set as a set of characters
    GSM_7 = set("@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞ" + \
    "¡ÄÖÑÜ§¿äöñüà" + \
    "abcdefghijklmnopqrstuvwxyz" + \
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + \
    "0123456789" + \
    " #\n&'()*+,-./:;<=>?!\"%_")
    
    # Check if all characters in message are in GSM-7 set
    is_gsm7 = all(c in GSM_7 for c in message)
    
    if is_gsm7:
        encoding = "GSM-7"
        max_length = 160
    else:
        encoding = "UCS-2"
        max_length = 70
        message_length = len(message)
        fits_in_single_segment = message_length <= max_length
    return encoding, message_length, fits_in_single_segment

# Example usage with provided examples
messages = [
    "Ahoy World",
    "This is a test message with special characters: ñáéíóú.",
    "Visit the Twilio booth at Hall A 03 during WeAreDeveloper World Congress",
    "Rumors say Twilio will provide healthy smoothies 🥤🍓🍍",
    "Hello, world!"
]
for msg in messages:
    encoding, length, fits_in_single = determine_encoding_and_length(msg)
    print(f"Message: {msg}\nEncoding: {encoding}\nLength: {length}\nFits in single segment: {fits_in_single}\n")
