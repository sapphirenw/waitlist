import { AppConfig } from "@/lib/config";
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

export const WelcomeEmail = (config: AppConfig) => (
    <Html>
        <Head />
        <Preview>
            {config.email.preview}
        </Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src={config.image.dark}
                    width={Number(config.image.width)}
                    height={Number(config.image.height)}
                    alt={config.image.alt}
                    style={logo}
                />
                <Text style={paragraph}>
                    {config.email.header}
                </Text>
                <Text style={paragraph}>
                    {config.email.body}
                </Text>
                <Text style={paragraph}>
                    {config.email.footer}
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

