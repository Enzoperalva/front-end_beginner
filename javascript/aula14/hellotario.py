class Message:
    def __init__(self):
        self.text = "Hello, world!"


class Encoder:
    def __init__(self, message: Message):
        self.data = [ord(c) ^ 42 for c in message.text]

    def get_encoded(self):
        return self.data


class Decoder:
    def __init__(self, data):
        self.data = data

    def decode(self):
        return "".join(chr(x ^ 42) for x in self.data)


class Printer:
    def __init__(self, content):
        self.content = content

    def execute(self):
        getattr(__import__("builtins"), "print")(self.content)


class Application:
    def __init__(self):
        self.message = Message()

    def run(self):
        encoded = Encoder(self.message).get_encoded()
        decoded = Decoder(encoded).decode()
        Printer(decoded).execute()


if __name__ == "__main__":
    Application().run()