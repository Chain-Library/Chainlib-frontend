import React, { ReactNode } from 'react'
import PublishLayout from './_components/publishLayout'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <PublishLayout>{children}</PublishLayout>
    )
}
