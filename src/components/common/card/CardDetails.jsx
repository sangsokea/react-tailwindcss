import React from 'react'
import { Card } from 'flowbite-react';
export default function CardDetails({title, description, image}) {
  return (
    <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc={image || "https://dummyimage.com/640x360/fff/aaa"}
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {title || "Untitled"}
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      {description || "No description"}
    </p>
  </Card>
  )
}
