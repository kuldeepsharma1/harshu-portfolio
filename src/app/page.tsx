// pages/index.tsx  (or wherever your Home page lives)
import React from "react";
import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Row,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL, social } from "@/resources";

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
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", border:'5px solid red' }}>
      {/* HERO */}
      <section
        aria-label="Hero"
        style={{
          width: "100%",
          minHeight: "78vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* full-bleed background image */}
        <img
          src={"/images/avatar.jpg"}
          alt={`${person.name} on the court`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "brightness(0.45)",
            zIndex: 0,
          }}
        />

        {/* subtle gradient overlay for premium contrast */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.7) 100%)",
            zIndex: 1,
          }}
        />

        {/* Centered content */}
        <Column
          maxWidth="xl"
          gap="xl"
          paddingY="32"
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
          <Row gap="12" vertical="center" horizontal="center" style={{ alignItems: "center" }}>
            <Avatar src={person.avatar}  size="l" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Text variant="label-default-m" style={{ color: "rgba(255,255,255,0.85)" }}>
                {person.location ? `${person.location} · ${person.languages?.[0] || "English"}` : ""}
              </Text>
              <Text variant="label-default-s" style={{ color: "rgba(255,255,255,0.7)" }}>
                teen athlete • fitness creator • storyteller
              </Text>
            </div>
          </Row>

          {/* Headline */}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="12">
            <Heading wrap="balance" variant="display-strong-xl" style={{ color: "white", lineHeight: 1.02 }}>
              {home.headline}
            </Heading>
          </RevealFx>

          {/* Subline */}
          <RevealFx translateY="12" delay={0.15} fillWidth horizontal="center" paddingBottom="8">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 820 }}>
              {home.subline}
            </Text>
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
                <Button variant="tertiary" size="l">
                  Contact
                </Button>
              </a>
            </Row>
          </RevealFx>

          {/* Sub-row: social + micro pitch */}
          <Row gap="12" vertical="center" horizontal="center" style={{ marginTop: 12 }}>
            <Text variant="label-default-s" style={{ color: "rgba(255,255,255,0.75)" }}>
              Follow for training tips & music snippets —
            </Text>

            {/* show first social (Instagram) — expand as needed */}
            {social?.map((s) => (
              <a key={s.name} href={s.link} target="_blank" rel="noreferrer" aria-label={s.name}>
                <Button variant="tertiary" size="s">
                  {s.name}
                </Button>
              </a>
            ))}
          </Row>
        </Column>
      </section>

      {/* FEATURE / SHORT HIGHLIGHTS (clean, premium cards) */}
      <section style={{ padding: "48px 20px", background: "white" }}>
        <Column maxWidth="xl" gap="m" horizontal="center">
          <Row horizontal="between" vertical="center" style={{ width: "100%" }}>
            <div>
              <Heading variant="heading-strong-m">What I make</Heading>
              <Text variant="body-default-m" style={{ marginTop: 8, color: "rgba(0,0,0,0.7)" }}>
                Actionable training reels, match-day highlights, fitness collabs, and short storytelling music clips.
              </Text>
            </div>

            <div style={{ textAlign: "right" }}>
              <Text variant="label-default-s" style={{ color: "rgba(0,0,0,0.6)" }}>
                Based in India • Available for collabs
              </Text>
              <a href={`mailto:${person.email}`} style={{ display: "block", marginTop: 6, textDecoration: "none" }}>
                <Button variant="secondary" size="m">Book a shoot</Button>
              </a>
            </div>
          </Row>

          {/* small three-column highlights — responsive fallback */}
          <Row gap="20" vertical="center" style={{ width: "100%", marginTop: 20, flexWrap: "wrap" }}>
            {[
              { title: "Basketball Training", desc: "Drills, form, and game insight." },
              { title: "Fitness Collabs", desc: "Workouts, challenges & coaching content." },
              { title: "Storytelling & Music", desc: "Short audio stories and singing snippets." },
            ].map((card) => (
              <div key={card.title} style={{
                flex: "1 1 280px",
                padding: 20,
                borderRadius: 12,
                boxShadow: "0 6px 20px rgba(12,18,30,0.06)",
                background: "#fff"
              }}>
                <Heading variant="heading-default-m">{card.title}</Heading>
                <Text variant="body-default-s" style={{ marginTop: 8, color: "rgba(0,0,0,0.65)" }}>
                  {card.desc}
                </Text>
              </div>
            ))}
          </Row>
        </Column>
      </section>

   
    </div>
  );
}
