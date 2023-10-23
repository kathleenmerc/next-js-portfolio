import React, { Children } from 'react'

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className='text-xl font-medium capitalize text-center'>
            {children}
    </h2>
  )
}
