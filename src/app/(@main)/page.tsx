import React from "react";
import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Schema,
  Meta,
  Row,
  Avatar,
  Badge,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social, } from "@/resources";
import { ShareSection } from "@/components/blog/ShareSection";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function HomePage() {
  return (
    <Column fillWidth horizontal="center" paddingY="xl">
      {/* HERO */}
      <section
        aria-label="Hero"
        style={{
          width: "100%",
          minHeight: "50vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* full-bleed background image */}
        <img
          src={"/images/avatar-transparent.png"}
          alt={`${person.name} on the court`}
          style={{
            position: "absolute",
            borderRadius: '10px',
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "blur(6px) brightness(0.3)",
            zIndex: 0,
          }}
        />

        {/* subtle gradient overlay for premium contrast */}
        {/* <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
                  zIndex: 1,
                }}
              />  */}

        {/* Centered content */}
        <Column
          maxWidth="xl"
          gap="l"
          paddingBottom="56"
          horizontal="center"
          style={{ position: "relative", zIndex: 2, color: "white", textAlign: "center" }}
        >
          {/* structured schema for SEO */}
          <Schema
            as="webPage"
            baseURL={baseURL}
            path={home.path}
            title={home.title}
            description={home.description}
            image={`/api/og/generate?title=${encodeURIComponent(person.name)}`}
            author={{
              name: person.name,
              url: `${baseURL}${about.path}`,
              image: `${baseURL}${person.avatar}`,
            }}
          />

          {/* Avatar + Quick tag line */}
          <RevealFx
            fillWidth
            horizontal="center"
            paddingLeft="12"
          >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="4"
              onBackground="neutral-strong"
              textVariant="label-default-s"
              arrow={false}
              href={'/about'}
            >
              <Row gap="12" vertical="center" horizontal="center" style={{ alignItems: "center" }}>
                <Avatar src={person.avatar} size="l" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  <Text variant="label-default-m" >
                    {person.location ? `${person.location} · ${person.languages?.[0] || "English"}` : ""}
                  </Text>
                  <Text variant="label-default-s" >
                    teen athlete • fitness creator • storyteller
                  </Text>
                </div>
              </Row>
            </Badge>
          </RevealFx>

          {/* Headline */}
          <RevealFx  fillWidth horizontal="center" >
            <Column align="center" gap="16">
              <Heading
                variant="display-strong-xl"
                onBackground="neutral-strong"
                style={{
                  textShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
              >
                {person.name}
              </Heading>
              <Text
                variant="heading-default-l"
                onBackground="neutral-weak"
                style={{
                  maxWidth: "600px",
                }}
              >
                {home.headline}
              </Text>
            </Column>

          </RevealFx>
          <RevealFx  fillWidth horizontal="center" >
            <Column
              direction="row"
              gap="12"
              wrap
              horizontal="center"
            >
              <Text variant="label-default-m" onBackground="neutral-weak">
                {person.location}
              </Text>
              <Text variant="label-default-m" onBackground="neutral-weak">
                •
              </Text>
              <Text variant="label-default-m" onBackground="neutral-weak">
                Teen Athlete
              </Text>
              <Text variant="label-default-m" onBackground="neutral-weak">
                •
              </Text>
              <Text variant="label-default-m" onBackground="neutral-weak">
                Fitness Creator
              </Text>
            </Column>
          </RevealFx>



          {/* Primary CTAs */}
          <RevealFx paddingTop="12" delay={0.35} horizontal="center">
            <Row gap="16" vertical="center" horizontal="center" style={{ marginTop: 8 }}>
              <Button
                id="about-cta"
                data-border="rounded"
                href={about.path}
                variant="primary"
                size="l"
                weight="strong"
                arrowIcon
              >
                About
              </Button>

              <Button
                id="gallery-cta"
                data-border="rounded"
                href="/gallery"
                variant="secondary"
                style={{ color: '#ffffffd6' }}

                size="l"
                weight="default"
              >
                Gallery
              </Button>

              <a
                href={`mailto:${person.email}`}
                style={{ textDecoration: "none" }}
                aria-label="Email Harshul"
              >
                <Button variant="secondary" size="l" weight="default" data-border="rounded" style={{ color: '#ffffffd6' }}>
                  Contact
                </Button>
              </a>
            </Row>
          </RevealFx>

          {/* Sub-row: social + micro pitch */}
          <Row gap="12" vertical="center" horizontal="center" style={{ marginTop: 12 }}>
            <Text variant="label-default-s" >
              Follow for training tips & music snippets —
            </Text>

            {/* show first social (Instagram) — expand as needed */}
            {social?.map((s) => (
              <a key={s.name} href={s.link} target="_blank" rel="noreferrer" aria-label={s.name}>
                <Button variant="tertiary" size="s" style={{color:'#ffffffe2'}}>
                  {s.name}
                </Button>
              </a>
            ))}
          </Row>
        </Column>
      </section>
      <Column maxWidth="l" gap="xl" paddingX="l">
        <Schema
          as="webPage"
          baseURL={baseURL}
          path={home.path}
          title={home.title}
          description={home.description}
          image={`/api/og/generate?title=${encodeURIComponent(person.name)}`}
          author={{
            name: person.name,
            url: `${baseURL}${about.path}`,
            image: `${baseURL}${person.avatar}`,
          }}
        />

     

        {/* WHAT I DO SECTION */}
        <Column
          fillWidth
          align="center"
          paddingY="xl"
        >
          <Column
            gap="48"
            style={{ maxWidth: "1100px", width: "100%" }}
            align="center"
          >
            <RevealFx speed="fast" delay={0}>
              <Column align="center" gap="16" style={{ textAlign: "center" }}>
                <Text variant="label-strong-s" onBackground="brand-strong">
                  WHAT I DO
                </Text>
                <Heading wrap="pretty"
                  variant="display-strong-xs" style={{ lineHeight: 1.8 }}
                  onBackground="neutral-strong"
                >
                  {home.subline}
                </Heading>
              </Column>
            </RevealFx>

            {/* Feature Grid */}
            <Column
              direction="row"
              gap="24"
              wrap
              horizontal="center"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                width: "100%",
              }}
            >
              {[
                {
                  icon: "🏀",
                  title: "Basketball Training",
                  desc: "Technical drills, form breakdowns, and game IQ tips to elevate your performance.",
                },
                {
                  icon: "💪",
                  title: "Fitness Content",
                  desc: "Workout routines, training challenges, and collaborative coaching videos.",
                },
                {
                  icon: "🎵",
                  title: "Creative Storytelling",
                  desc: "Short music clips, audio stories, and artistic expression through sound.",
                },
              ].map((card, index) => (
                <RevealFx speed="fast" delay={0.1 + index * 0.1} key={card.title}>
                  <Column
                    gap="16"
                    padding="32"
                    background="surface"
                    border="neutral-medium"
                    radius="l"
                    align="center"
                    style={{
                      height: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      textAlign: "center",
                    }}
                  >
                    <Text style={{ fontSize: "3rem", lineHeight: 1 }}>
                      {card.icon}
                    </Text>
                    <Column gap="12" align="center">
                      <Heading
                        variant="heading-strong-l"
                        onBackground="neutral-strong"
                      >
                        {card.title}
                      </Heading>
                      <Text
                        variant="body-default-m"
                        onBackground="neutral-weak"
                        style={{ maxWidth: "350px" }}
                      >
                        {card.desc}
                      </Text>
                    </Column>
                  </Column>
                </RevealFx>
              ))}
            </Column>
          </Column>
        </Column>

        {/* CTA SECTION */}
        <Column
          fillWidth
          gap="32"
          paddingY="xl"
          style={{
            minHeight: "60vh",
          }}
        >
          <Column horizontal="center" align="center" fillWidth>

            <RevealFx speed="fast" delay={0}>
              <Column gap="20" horizontal="center" align="center" fillWidth paddingBottom="24" >
                <Heading
                  variant="display-strong-xl"
                  onBackground="neutral-strong" paddingBottom="12"
                >
                  Let&apos;s Work Together
                </Heading>
                <Text paddingTop="12"
                  variant="body-default-l"
                  onBackground="neutral-weak"
                  style={{ maxWidth: "600px" }}
                >
                  Available for brand partnerships, content creation, training
                  collaborations, and creative projects.
                </Text>
              </Column>
            </RevealFx>

            <RevealFx speed="fast" delay={0.1}>
              <Column direction="row" gap="16" wrap horizontal="center" align="center" fillWidth >
                <Button
                  href={`mailto:${person.email}`}
                  variant="primary"
                  size="l"
                  data-border="rounded"
                  weight="strong"
                  suffixIcon="arrowRight"
                >
                  Book a Collaboration
                </Button>
                <Button
                  href="/gallery"
                  variant="secondary"
                  size="l"
                  data-border="rounded"
                >
                  View Portfolio
                </Button>
              </Column>
            </RevealFx>
          </Column>

        </Column>

        <ShareSection title="Share" url={baseURL} />
      </Column>
    </Column>
  );
}