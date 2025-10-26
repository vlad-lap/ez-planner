import { Button } from '@mui/material';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col justify-center items-center">
            <h1 className="font-bold text-5xl mb-6">EZ Planner</h1>
            <div>Plan your budget easily</div>
            <Button
                variant="contained"
                size="large"
                href="/home"
            >
                <span>Start</span>
            </Button>
        </main>
    );
}
