"use server"

import { Resend } from 'resend';
import { WelcomeEmail } from '@/components/emailTemplates/template';
import PocketBase from 'pocketbase';

export async function addToWaitlist(
    email: string,
    name: string,
    employmentStatus: string,
    linkedin: string,
    refId: string,
) {
    try {
        // setup resend email provider
        const resend = new Resend(process.env.RESEND_API_KEY);

        // setup pocketbase
        const pb = new PocketBase('https://pocketbase.sapphirenw.com');
        await pb.collection('users').authWithPassword(process.env.POCKETBASE_USER!, process.env.POCKETBASE_PASSWORD!);
        if (!pb.authStore.isValid) {
            throw new Error("Failed to authenticate with pocketbase")
        }

        // send the welcome email
        const resp = await resend.emails.send({
            from: process.env.SEND_EMAIL!,
            to: email,
            subject: process.env.EMAIL_SUBJECT!,
            react: WelcomeEmail({ userFirstname: name }),
        });
        console.log(resp)

        var resendError = ""
        if (resp.error !== null) {
            resendError = `name=${resp.error.name} message=${resp.error.message}`
        }

        // add to the waitlist
        const data = {
            "email": email,
            "name": name,
            "key": process.env.WAITLIST_KEY,
            "employment_status": employmentStatus,
            "linkedin": linkedin,
            "welcome_resend_id": resp.data?.id ?? "",
            "welcome_resend_error": resendError,
            "refId": refId,
        };

        const record = await pb.collection('waitlist').create(data);

        pb.authStore.clear();
        if (record === undefined) {
            throw new Error("failed to write the pocketbase record")
        }

        return record.id
    } catch (e) {
        console.error(e)
        throw e
    }
}