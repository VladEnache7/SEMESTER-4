import gradio as gr
from PIL import Image  # Added import

def show_image(image):
    print("show_image() called")

    return image

block = gr.Blocks().queue()
with block:
    with gr.Tabs():
        gr.Markdown("## Upload an image, press the button, and see your image below!")
        with gr.Row():
            with gr.Column():
                with gr.Row():
                    image_input = gr.Image(type="pil", label="Upload your image")
                with gr.Row():
                    btn = gr.Button("Show Image")
            with gr.Row():
                image_output = gr.Image(type="pil", label="Your Image Appears Here",
                                  interactive=False)  # Prevent output editing
    print("UI Created")
    btn.click(
        fn=show_image,
        inputs=image_input,
        outputs=image_output,
    )

print("Launching demo...")
block.launch(share=True)
print("Demo Launched =))")
