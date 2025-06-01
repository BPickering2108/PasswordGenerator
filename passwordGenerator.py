import secrets
import string

def generate_password(length=12, use_symbols=True, use_numbers=True, exclude_chars=""):
    # Start with uppercase and lowercase letters
    characters = string.ascii_letters
    
    # Include numbers if the user allows them
    if use_numbers:
        characters += string.digits
    
    # Include symbols if the user allows them
    if use_symbols:
        characters += string.punctuation
    
    # Remove excluded characters
    for char in exclude_chars:
        characters = characters.replace(char, "")
    
    # Generate password
    password = ''.join(secrets.choice(characters) for _ in range(length))
    return password