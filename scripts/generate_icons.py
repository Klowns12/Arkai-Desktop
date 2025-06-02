from PIL import Image
import os

# Set up paths
base_dir = os.path.dirname(os.path.dirname(__file__))
icons_dir = os.path.join(base_dir, "src-tauri", "icons")
source_logo = os.path.join(icons_dir, "logo.png")

# Create icons directory if it doesn't exist
os.makedirs(icons_dir, exist_ok=True)

# Load source image
img = Image.open(source_logo)

# Generate PNG icons
sizes = [(32, "32x32.png"), (128, "128x128.png"), (256, "128x128@2x.png")]

for size, filename in sizes:
    resized = img.resize((size, size), Image.Resampling.LANCZOS)
    resized.save(os.path.join(icons_dir, filename), "PNG")

# Generate ICO file with multiple sizes
ico_sizes = [(16, 16), (32, 32), (48, 48), (256, 256)]
ico_images = []

for size in ico_sizes:
    ico_images.append(img.resize(size, Image.Resampling.LANCZOS))

ico_path = os.path.join(icons_dir, "icon.ico")
ico_images[0].save(
    ico_path,
    format="ICO",
    sizes=[(im.width, im.height) for im in ico_images],
    append_images=ico_images[1:],
)

print("Icons generated successfully!")
