# Omar's Homepage

Build and cutomize your online portafolio.

<p align="center">
  <img src='https://github.com/uma-dev/umadev-homepage/assets/22565959/5940b303-d52c-4b54-875f-0e0431aa5e78' width='400'>
</p>

Inspired by @craftzdog [version](https://github.com/craftzdog/craftzdog-homepage)

## Tools used

Important: the 3d model needs to be as lighter as you can in order to get great render speeds, so voxel its a great option for light 3d files.

## Customization

1. **Profile picture**: Use 200x200 jpeg image (for photos) or PNG for screenshots and others.
2. **Thumbnails**: Use 600px width in your thumbnails and compress images using some tool like [GIMP](https://www.gimp.org/)
3. **Your 3D Model**
   - MagicaVoxel: Build your own [voxel](https://en.wikipedia.org/wiki/Voxel) and save it as `.obj`
   - Blender: Import your `.obj` model and then export to `.glb`. No plugins needed.

### Stack

- Next.js
- Chakra UI
- Three.js

## Running locally

Clone the repo first and navigate to the main directory.

Make sure you nave `node` and `npm`, then execute:

```
# Install the dependencies
npm install
```

## Developing

Run the app and write your changes:

```
# Start the dev server
npm run dev
```

## Building

Create the production version:

```
npm run build
You can preview the production build with npm run preview.
```

## Deploying

Connect your GitHub repo to [Vercel](https://vercel.com/) and you are done.
