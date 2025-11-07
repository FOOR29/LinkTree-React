import GradientBlinds from "./GradientBlinds/GradientBlinds"

const Backgraund = () => {
    return (
        <GradientBlinds
            gradientColors={['#BDBDBD', '#6B6B6B']}
            angle={30}
            noise={0.3}
            blindCount={12}
            blindMinWidth={40}
            spotlightRadius={0.5}
            spotlightSoftness={0.5}
            spotlightOpacity={1}
            mouseDampening={0.15}
            distortAmount={3}
            shineDirection="left"
            mixBlendMode="lighten"
        />
    )
}

export default Backgraund