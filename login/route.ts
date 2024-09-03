import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { username, password } = await req.json();

  try {
    const response = await fetch('https://cmb-staff-dsp-dev.hk.hsbc:8443/dsp/dspAuthenticate.jsp?realm=Staff&service=ssoservice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-API-Version': "sfjslfjslfjsl",
        'x-requested-with': "XMLHTTPRequest",
        'X-client-id': "DSP_Test_client",
        'x-client-secret': "fjslfjsl"
      },
      body: new URLSearchParams({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
  }
}
