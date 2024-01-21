"use client"

import Image, { ImageProps } from "next/image"
import styles from "./Avatar.module.scss"

export interface Props {
    src?: ImageProps["src"]
}

function Avatar({
    src = "https://ui-avatars.com/api/?background=0D8ABC&color=fff",
}: Props) {
    return (
        <div className={styles.avatar}>
            {src ? <Image src={src} width={40} height={40} alt="" /> : "AE"}
        </div>
    )
}

export default Avatar
