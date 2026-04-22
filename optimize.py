import os
from PIL import Image

source_dir = 'public/images/gallery'
dest_dir = 'public/images/gallery/optimized'

os.makedirs(dest_dir, exist_ok=True)

count = 0
for filename in os.listdir(source_dir):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        source_path = os.path.join(source_dir, filename)
        name, _ = os.path.splitext(filename)
        dest_path = os.path.join(dest_dir, name + '.webp')
        
        try:
            with Image.open(source_path) as img:
                # Convert to RGB if necessary
                if img.mode in ("RGBA", "P"):
                    img = img.convert("RGB")
                    
                # Resize if width > 1920
                if img.width > 1920:
                    ratio = 1920 / img.width
                    new_size = (1920, int(img.height * ratio))
                    img = img.resize(new_size, Image.Resampling.LANCZOS)
                
                img.save(dest_path, 'webp', quality=85)
                count += 1
        except Exception as e:
            print(f"Error processing {filename}: {e}")

print(f"Successfully optimized {count} images to WEBP.")
