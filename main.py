from kivy.app import App
from kivy.uix.boxlayout import BoxLayout

class IncrementerApp(App):
    def build(self):
        return BoxLayout()

    def increment(self):
        # Access the label widget by its ID
        label = self.root.ids.counter_label
        # Increment the label's text
        label.text = str(int(label.text) + 1)

if __name__ == '__main__':
    IncrementerApp().run()
