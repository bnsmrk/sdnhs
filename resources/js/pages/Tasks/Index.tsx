import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Task',
        href: '/tasks',
    },
];

export default function Task() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="tasks" />
            <h1>Task</h1>
        </AppLayout>
    );
}
