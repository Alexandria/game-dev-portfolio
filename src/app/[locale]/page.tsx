import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Arrow,
  SmartImage,
} from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";

import styles from "@/components/home.module.scss";

import { baseURL, routes, renderContent } from "@/app/resources";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations();
  const { home, about } = renderContent(t);
  const title = home.title;
  const description = home.description;
  const ogImage = `https://github.com/Alexandria/game-dev-portfolio/blob/main/public/images/cover.png?raw=true`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/${locale}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();
  const { home, about, person, newsletter } = renderContent(t);
  return (
    <Flex
      maxWidth="m"
      fillWidth
      gap="xl"
      direction="column"
      alignItems="center"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `https://github.com/Alexandria/game-dev-portfolio/blob/main/public/images/cover.png?raw=true`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth direction="column" paddingY="l" gap="m">
        <Flex direction="column" fillWidth maxWidth="s">
          <RevealFx
            translateY="4"
            fillWidth
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            justifyContent="flex-start"
            paddingBottom="m"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx translateY="12" delay={0.4}>
            <Flex fillWidth>
              <Button
                id="about"
                data-border="rounded"
                href={`/${locale}/about`}
                variant="tertiary"
                size="m"
              >
                <Flex gap="8" alignItems="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {t("about.title")}
                  <Arrow trigger="#about" />
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Flex>
      </Flex>
      {/* <Flex fillWidth gap="24" mobileDirection="column">
        <Flex flex={1} paddingLeft="l">
          <Heading as="h3" variant="body-default-xs" wrap="balance">
            Latest Project
          </Heading>
        </Flex>
      </Flex> */}
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} locale={locale} />
      </RevealFx>
      <Flex
        // className={styles.blockAlign}
        fillWidth
        maxWidth="m"
        direction="column"
      >
        {/* TODO: Toggle the last two bullot points on the home page if
        mobileDirection https://once-ui.com/docs/toggleButton */}
        {about.unity.display && (
          <Flex
            direction="row"
            mobileDirection="column"
            fillWidth
            marginBottom="40"
          >
            <Flex flex={5} className={styles.stickyHeader}>
              <Heading
                as="h2"
                id={about.unity.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.unity.title}
              </Heading>
            </Flex>
            <Flex
              flex={7}
              direction="column"
              fillWidth
              gap="l"
              marginBottom="40"
            >
              {about.unity.experiences.map((experience, index) => (
                <Flex
                  key={`${experience.company}-${experience.role}-${index}`}
                  fillWidth
                  direction="column"
                >
                  <Flex
                    fillWidth
                    justifyContent="space-between"
                    alignItems="flex-end"
                    marginBottom="4"
                  >
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {experience.timeframe}
                    </Text>
                  </Flex>
                  <Text
                    variant="body-default-s"
                    onBackground="brand-weak"
                    marginBottom="m"
                  >
                    {experience.role}
                  </Text>
                  <Flex as="ul" direction="column" gap="16">
                    {experience.achievements.map(
                      (achievement: string, index: any) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      )
                    )}
                  </Flex>
                  {experience.images.length > 0 && (
                    <Flex fillWidth paddingTop="m" paddingLeft="20" wrap>
                      <Flex gap="m" mobileDirection="column">
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex>
        )}
        {about.godot.display && (
          <Flex
            direction="row"
            mobileDirection="column"
            fillWidth
            maxWidth="m"
            marginBottom="40"
          >
            <Flex flex={5} className={styles.stickyHeader}>
              <Heading
                as="h2"
                id={about.godot.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.godot.title}
              </Heading>
            </Flex>
            <Flex
              flex={7}
              direction="column"
              fillWidth
              gap="l"
              marginBottom="40"
            >
              {about.godot.experiences.map((experience, index) => (
                <Flex
                  key={`${experience.company}-${experience.role}-${index}`}
                  fillWidth
                  direction="column"
                >
                  <Flex
                    fillWidth
                    justifyContent="space-between"
                    alignItems="flex-end"
                    marginBottom="4"
                  >
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text
                      variant="heading-default-xs"
                      onBackground="neutral-weak"
                    >
                      {experience.timeframe}
                    </Text>
                  </Flex>
                  <Text
                    variant="body-default-s"
                    onBackground="brand-weak"
                    marginBottom="m"
                  >
                    {experience.role}
                  </Text>
                  <Flex as="ul" direction="column" gap="16">
                    {experience.achievements.map(
                      (achievement: string, index: any) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      )
                    )}
                  </Flex>
                  {experience.images.length > 0 && (
                    <Flex fillWidth paddingTop="m" paddingLeft="20" wrap>
                      <Flex gap="m" mobileDirection="column">
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            borderStyle="solid-1"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <SmartImage
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex>
        )}
      </Flex>
      {/* {routes['/blog'] && (
				<Flex
					fillWidth gap="24"
					mobileDirection="column">
					<Flex flex={1} paddingLeft="l">
						<Heading
							as="h2"
							variant="display-strong-xs"
							wrap="balance">
							Latest from the blog
						</Heading>
					</Flex>
					<Flex
						flex={3} paddingX="20">
						<Posts range={[1,2]} columns="2" locale={locale}/>
					</Flex>
				</Flex>
			)}
			<Projects range={[2]} locale={locale}/> */}
      {/* {newsletter.display && <Mailchimp newsletter={newsletter} />} */}
    </Flex>
  );
}
