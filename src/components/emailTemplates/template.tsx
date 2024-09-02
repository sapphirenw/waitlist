import {
    Body,
    Column,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";
import * as React from "react";

interface WelcomeEmailProps {
    userFirstname: string;
}

export const WelcomeEmail = ({
    userFirstname,
}: WelcomeEmailProps) => (
    <Html>
        <Head />
        <Preview>
            The sales intelligence platform that helps you uncover qualified leads.
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={`https://pocketbase.sapphirenw.com/api/files/2v0pb1wl1ionpe7/l813wya63agry6x/resume_dark_266x100_Wc2nOoXVgB.png`}
                    width="150"
                    alt="AIThing"
                    style={logo}
                />
                <Text style={paragraph}>
                    Hello {userFirstname},
                </Text>
                <Text style={paragraph}>
                    Thank you for signing up on the waitlist for Resume by AIThing! We hope that you are as excited as we are to try out this product. We hope to have further updates as soon as possible. In the meantime, follow our social media pages to stay up-to-date on any current developments.
                </Text>
                <Text style={paragraph}>
                    Best,
                    <br />
                    The AIThing team
                </Text>
                <Hr style={hr} />
                <Tailwind>
                    <AIThingFooter />
                </Tailwind>
            </Container>
        </Body>
    </Html>
);

const AIThingFooter = () => {
    return <Section className="text-center">
        <table className="w-full">
            <tr className="w-full">
                <td align="center">
                    <Img
                        alt="AIThing"
                        height="20"
                        src={`https://pocketbase.sapphirenw.com/api/files/2v0pb1wl1ionpe7/kf77rafap2dwxtx/aithing_dark_340x100_dsCNq2ggDV.png`}
                    />
                </td>
            </tr>
            <tr>
                <td align="center">
                    <Row className="table-cell h-[44px] w-[56px] align-bottom">
                        <Column className="pr-[8px]">
                            <Link href="https://www.linkedin.com/company/sapphirenw">
                                <Img
                                    alt="LinkedIn"
                                    height="36"
                                    src="https://pocketbase.sapphirenw.com/api/files/2v0pb1wl1ionpe7/dvqfehxgk2bstf1/linkedin_VR0BODf6Aj.png?token="
                                    width="36"
                                />
                            </Link>
                        </Column>
                        <Column className="pr-[8px]">
                            <Link href="https://x.com/jakerlanders">
                                <Img alt="X" height="36" src="https://pocketbase.sapphirenw.com/api/files/2v0pb1wl1ionpe7/0nzrllp7k3xjci3/twitter_TMkuEQtg40.png" width="36" />
                            </Link>
                        </Column>
                        <Column>
                            <Link href="https://www.instagram.com/sapphire_nw">
                                <Img
                                    alt="Instagram"
                                    height="36"
                                    src="https://pocketbase.sapphirenw.com/api/files/2v0pb1wl1ionpe7/2qehjxyvfg2ts94/instagram_VyztK50Daz.png"
                                    width="36"
                                />
                            </Link>
                        </Column>
                    </Row>
                </td>
            </tr>
            <tr>
                <td align="center">
                    <Text className="my-[8px] text-[16px] leading-[24px] text-gray-500">
                        Portland, OR 97224
                    </Text>
                    <Text className="mt-[4px] text-[16px] leading-[24px] text-gray-500">
                        support@aithing.co
                    </Text>
                </td>
            </tr>
        </table>
    </Section>
}

WelcomeEmail.PreviewProps = {
    userFirstname: "Alan",
} as WelcomeEmailProps;

export default WelcomeEmail;

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
};

const logo = {
    margin: "0 auto",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
};

const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
};

