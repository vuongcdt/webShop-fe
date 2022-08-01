import { Novu } from '@novu/node';

const novu = new Novu(process.env.NOVU_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Method Not Allowed.' });
    }

    let { customer_id: user_id } = req.body;
    let notifi_template = req.headers['x-wc-webhook-topic'];
    let result = await novu.trigger(notifi_template.replace('.', ''), {
        to: {
            subscriberId: '1',
        },
        payload: req.body,
    });

    res.json({
        status: true,
        message: 'Send notification success.',
        result: JSON.stringify(result.data),
    });
}
