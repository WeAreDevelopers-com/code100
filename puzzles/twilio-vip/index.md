---
title: CODE100 - GSM-7 or UCS-2
layout: challenge
--- 

This challenge was given to WeAreDevelopers by our partners [Twilio](ttps://twilio.com). 

[![Twilio developers logo](twilio-devs.png)](https://twilio.com)

## Intro

SMS messages can be encoded in different character encodings to optimize space. The two main types of encodings are:
    
- **GSM-7**: This encoding packs the most commonly used letters and symbols in many languages into 7 bits per character. This allows up to 160 characters in a single SMS segment.
- **UCS-2**: This encoding uses 16 bits per character and is the fallback for characters not supported by GSM-7. This allows up to 70 characters in a single SMS segment.

When an SMS message contains characters outside the GSM-7 character set, it must be encoded in UCS-2. This significantly reduces the number of characters that can fit into a single SMS segment.

Don’t worry, when using [Twilio Programmable Messaging](https://www.twilio.com/docs/messaging/quickstart), this will be done automatically for you :) 

## Challenge

Create a function that determines whether an SMS message body can be encoded using GSM-7 or if it requires UCS-2 encoding. The function should also calculate the length of the message in bits for the required encoding.

Write a function that, given a text string representing the body of an SMS, determines:

1. Whether the message can be encoded using **GSM-7** or if it requires **UCS-2** encoding.
2. The length of the message in bits.

## Input

- A text string representing the body of an SMS.

## Output

- The encoding type (GSM-7 or UCS-2).
- The length of the message in bits

## Example Input / Output

- “Visit the Twilio booth at Hall A 03 during WeAreDeveloper World Congress”
 => GSM-7, 504 bits
- “Rumors say there will be free healthy smoothies at the Twilio booth 🥤🍓🍍” =>  UCS-2, 1184 bits
- “Ahoy World” => GSM-7, 70 bits
- "This is a test message with special characters: ñáéíóú." =>  UCS-2, 880 bits

These tests are available in the [dataset.json](dataset.json) file to use to create your function. 

## Helpful Background Knowledge

- [What is GSM-7 Character Encoding?](https://www.twilio.com/docs/glossary/what-is-gsm-7-character-encoding)
- [What is UCS-2 Character Encoding?](https://www.twilio.com/docs/glossary/what-is-ucs-2-character-encoding)
- [How to Detect Non "GSM 7 bit alphabet" characters in input field](https://stackoverflow.com/questions/12673120/how-to-detect-non-gsm-7-bit-alphabet-characters-in-input-field)
- [How to count Unicode characters in Javascript](https://coolaj86.com/articles/how-to-count-unicode-characters-in-javascript/)
* [Messaging Segment Calculator](https://twiliodeved.github.io/message-segment-calculator/)

## Submitting your answer 

Fill out [this form](https://forms.gle/hRaCD75AYV4jmnYk9) pointing us to your code solution and tell us how you solved the problem. We will pick from the submissions one lucky winner to get a VIP Ticket worth > 1000 Euro for the WeAreDevelopers World Congress in Berlin, Germany 17-19th of July. 

Good luck! 