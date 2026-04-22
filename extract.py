import os
from PIL import Image

gif_path = "/Users/macbook/Desktop/Яковка/Яковка - сжатые отсортированные webp/__prompt_cinematic_4k_drone_video_featu.gif"
out_dir = "/Users/macbook/Desktop/Яковка/a8a8a8d8b5beb93a26b0b85f60b5fe56/yakovka-next/public/assets/sequence"
os.makedirs(out_dir, exist_ok=True)

with Image.open(gif_path) as im:
    for i in range(1, 301):
        try:
            im.seek(i - 1)
            # converting to RGB to save as webp
            rgb_im = im.convert('RGB')
            # The user asked for "files from 001 to 300"
            out_file = os.path.join(out_dir, f"{i:03d}.webp")
            rgb_im.save(out_file, "WEBP", quality=80)
        except EOFError:
            break
print("Extracted frames!")
