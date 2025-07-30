"use client";
import { renderContent } from "@/app/resources";
import {
  Flex,
  Heading,
  RevealFx,
  SmartImage,
  Text,
  Button,
} from "@/once-ui/components";
import { useTranslations } from "next-intl";
import styles from "../home.module.scss";
import { useContext } from "react";
import { GameModeContext } from "../GameModeProvider";
import { Projects } from "../work/Projects";
import { getPosts } from "@/app/utils/utils";

const HomeContent = () => {
  const t = useTranslations();
  const { about } = renderContent(t);
  const { gameMode } = useContext(GameModeContext);

  return (
    <Flex
      // className={styles.blockAlign}
      fillWidth
      maxWidth="m"
      direction="column"
    >
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
          <Flex flex={7} direction="column" fillWidth gap="l" marginBottom="40">
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
                {experience.demo && (
                  <Flex padding="16">
                    <Button href={experience.demo}> Play on Itch </Button>
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
          <Flex flex={7} direction="column" fillWidth gap="l" marginBottom="40">
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

      {/*!gameMode && about.development.display && (
        <>
           <Heading
            as="h2"
            id={about.development.title}
            variant="display-strong-s"
            marginBottom="m"
          >
            {about.development.title}
          </Heading> 
          <Flex direction="column" fillWidth gap="l" marginBottom="40">
            {about.development.experiences.map((experience, index) => (
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
                  <Heading
                    as="h2"
                    id={experience.company}
                    variant="display-strong-s"
                  >
                    {experience.company}
                  </Heading>
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
        </>
      )*/}
    </Flex>
  );
};

export default HomeContent;
