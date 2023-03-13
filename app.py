def register(username, password, confirm_password):
    if password == confirm_password:
        # Register the user
        print(f"Successfully registered user {username}")
    else:
        print("Error: Passwords do not match")

# Example usage
register("john", "password123", "password123")
register("jane", "secret", "notsecret")
