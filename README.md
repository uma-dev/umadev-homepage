# Omar's Homepage

Build and cutomize your online portfolio.

<p align="center">
  <img src='https://github.com/uma-dev/umadev-homepage/assets/22565959/300a2b9c-1b91-4f0e-984f-bf365a75a912' width='600'>
  <img src='https://github.com/uma-dev/umadev-homepage/assets/22565959/207a8fab-fd0a-47e5-b2cf-6848f1f5228d' width='210'>
</p>
<p align="right">
  

</p>

Inspired by @craftzdog [version](https://github.com/craftzdog/craftzdog-homepage)

## Tools used

## Customization

1. **Profile picture**: Use 200x200 jpeg image (for photos) or PNG for screenshots and others.
2. **Thumbnails**: Use 600px width in your thumbnails and compress images using some tool like [GIMP](https://www.gimp.org/)
3. **Your 3D Model**
   - MagicaVoxel: Build your own [voxel](https://en.wikipedia.org/wiki/Voxel) and save it as `.obj`
   - Blender: Import your `.obj` model and then export to `.glb`. No plugins needed.

**NOTE:** the 3d model needs to be as lighter as you can in order to get good render speeds, so voxel its a great option for light 3d files.

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
