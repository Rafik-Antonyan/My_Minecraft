import { NearestFilter, TextureLoader } from 'three'

import {
	dirtImg,
	grassImg,
	glassImg,
	woodImg,
	logImg,
} from './images'

const dirtTexture = new TextureLoader().load(dirtImg)
const logTexture = new TextureLoader().load(logImg)
const glassTexture = new TextureLoader().load(glassImg)
const grassTexture = new TextureLoader().load(grassImg)
const woodTexture = new TextureLoader().load(woodImg)
const groundTexture = new TextureLoader().load(grassImg)

dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;

export {
	dirtTexture,
	logTexture,
	glassTexture,
	grassTexture,
	woodTexture,
	groundTexture
}

