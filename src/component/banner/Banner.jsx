import React from 'react'
import { BannerContainer, TitleContainer, StripeContainer, SubtitleContainer  } from './banner.styles'



function Banner({ children, title, subtitle }) {
    return (
        <BannerContainer >
            <TitleContainer>{title}</TitleContainer>
            <StripeContainer />
            <SubtitleContainer>{subtitle}</SubtitleContainer>
            {children}
        </BannerContainer>
    )
}

export default Banner
