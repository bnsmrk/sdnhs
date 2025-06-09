import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Course',
        href: '/course',
    },
];

export default function Course() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <form className="flex flex-col gap-6">
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email address</Label>
                        <Input id="email" type="email" required autoFocus tabIndex={1} autoComplete="email" placeholder="email@example.com" />
                    </div>

                    <Button type="submit" className="mt-4 w-full">
                        Log in
                    </Button>
                </div>
            </form>
        </AppLayout>
    );
}
