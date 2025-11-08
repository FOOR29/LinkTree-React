import Beams from "./Beams/Beams"

const BackgroundMobile = () => {
    return (
        <Beams
            beamWidth={1.3}
            beamHeight={45}
            beamNumber={12}
            lightColor="#BDBDBD"
            speed={4}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={-40}
        />
    )
}

export default BackgroundMobile