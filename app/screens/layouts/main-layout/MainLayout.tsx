import { Box } from "@mui/material"
import Header from "~components/Header"

interface MainLayoutProps {
    children: any
    title: string
}

function MainLayout({
    children,
    title,
}: MainLayoutProps) {

    return (
        <Box>
            <Header title={title} />
            {children}
        </Box>
    )
}

export default MainLayout