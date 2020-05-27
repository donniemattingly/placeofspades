import styled from "styled-components";
import React, {FunctionComponent} from "react";


const avatarStrings = {
    'alien': '👽',
    'bear': '🐻',
    'boar': '🐗',
    'cat': '🐱',
    'chicken': '🐔',
    'cow': '🐮',
    'dog': '🐶',
    'dragon': '🐲',
    'fox': '🦊',
    'ghost': '👻',
    'giraffe': '🦒',
    'koala': '🐨',
    'lion': '🦁',
    'monkey': '🐵',
    'octopus': '🐙',
    'owl': '🦉',
    'panda': '🐼',
    'pig': '🐷',
    'rabbit': '🐰',
    'robot': '🤖',
    'shark': '🦈',
    'skull': '💀',
    't-rex': '🦖',
    'tiger': '🐯',
    'unicorn': '🦄'
};

const AvatarContainer = styled.div`
    font-size: calc(var(--card-height) * 0.5);
`;

interface AvatarProps{
    character: keyof typeof avatarStrings
}

export const Avatar = ({character}: AvatarProps) => {
    return (
        <AvatarContainer>
            {avatarStrings[character]}
        </AvatarContainer>
    )
};
