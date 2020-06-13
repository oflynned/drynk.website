import React, { useEffect, useState } from "react"

import "normalize.css"
import "./privacy-policy.scss"

import SEO from "../components/seo"
import { Header } from "../components/header"
import { Layout } from "../components/layout"
import { Footer } from "../components/footer"

const IndexPage = () => {
  const [dateEffective, setDateEffective] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      const payload = await fetch("https://drynk-api.syzible.com/privacy/version")
      const data = await payload.json()
      setDateEffective(data.dateEffective)
    }

    fetchData()
  }, [])

  return (
    <div className={"policy-page"}>
      <SEO title="Privacy Policy"/>
      <Header/>
      <Layout>
        <div className={"policy"}>
          <div className={"layout-content"}>
            <section>
              <h1>Privacy Policy</h1>
              <p>Effective: {dateEffective || "..."}</p>

              <p>We believe that transparency is the key to any healthy relationship. At drynk, we’re all about healthy.
                We appreciate that you are trusting us with information that is important to you, and we want to be
                transparent about how we use it.</p>
              <p>Here we describe the privacy practices for our devices, applications, software, websites, APIs,
                products, and services (the “Services”). You will learn about the data we collect, how we use it, the
                controls we give you over your information, and the measures we take to keep it safe.</p>
            </section>

            <section>
              <h1>Information we collect</h1>
              <p>When you use our Services, we collect the following types of information.</p>

              <h2>Information you provide us</h2>

              <h3>Account information</h3>
              <p>Some information is required to create an account on our Services, such as your name and email address.
                This is the only information you have to provide to create an account with us. In order to interact with
                any of our timeline services, a user needs to provide sex, height and weight to receive approximate
                recommendations.</p>

              <h3>Additional information</h3>
              <p>To help improve your experience or enable certain features of the Services, you may choose to provide
                us with additional information, like your logs for food, weight, sleep, water, or female health
                tracking; an alarm; and messages on discussion boards or to your friends on the Services.</p>
              <p>You may also connect with friends on the Services or invite friends who have not yet joined by
                providing their email addresses, accessing social networking accounts, or using the contact list on your
                mobile device. We do not store your contact list and delete it after it is used for adding contacts as
                friends.</p>
              <p>If you contact us or participate in a survey, contest, or promotion, we collect the information you
                submit such as your name, contact information, and message.</p>

              <h3>Payment and card information</h3>
              <p>Some drynk devices support payments and transactions with third parties. If you activate this feature,
                you must provide certain information for identification and verification, such as your name, credit,
                debit or other card number, card expiration date, and CVV code. This information is encrypted and sent
                to your card network, which upon approval sends back to your device a token, which is a set of random
                digits for engaging in transactions without exposing your card number. For your convenience, we store
                the last four digits of your card number and your card issuer’s name and contact information. You can
                remove the token from your account using your account settings under Google Play. We do not store your
                transaction history.</p>
              <p>If you purchase drynk merchandise on our website, you provide your payment information, including your
                name, credit or debit card number, card expiration date, CVV code, and billing address. We do not store
                this payment information, it is processed using Google Play billing serices. We store your shipping
                address to fulfill your order. Note that third-party payment processors may retain this information
                in accordance with their own privacy policies and terms.</p>
            </section>

            <section>
              <h2>Information we receive from your use of our services</h2>
              <h3>Device information</h3>
              <p>Your device collects data to estimate a variety of metrics such as the abv, volume and name of the
                drinks
                in your log, your approximately estimated timeline of blood alcohol content. The data collected varies
                depending on which device you use. When your device syncs with our applications or software, data
                recorded on your device is transferred from your device to our servers.</p>
              <h3>Usage information</h3>
              <p>When you access or use our Services, we receive certain usage or network activity information. This
                includes information about your interaction with the Services, for example, when you view or search
                content, install applications or software, create or log into your account, or open or interact with the
                drynk application on your device.</p>
              <p>We also collect data about the devices and computers you use to access the Services, including IP
                addresses, browser type, language, operating system, drynk or mobile device information (including
                device and application identifiers), the referring web page, pages visited, location (depending on the
                permissions you have granted us), and cookie information.</p>

              <h2>Information we receive from third parties</h2>
              <p>If you choose to connect your account on our Services to your account on another service, we may
                receive information from the other service. For example, if you connect to Facebook or Google, we may
                receive information like your name, profile picture, age range, language, email address, and friend
                list. You may also choose to grant us access to your exercise or activity data from another service. You
                can stop sharing the information from the other service with us by removing our access to that other
                service.</p>
              <p>We may partner with third parties, such as employers and insurance companies that offer Drynk Services
                to their employees and customers. In such cases, those companies may provide us with your name, email
                address, or similar information (like a telephone number or subscriber ID) so that we can invite you to
                participate or determine your eligibility for particular benefits, such as discounts or free
                services.</p>
            </section>

            <section>
              <h1>How we use information</h1>
              <p>We use the information we collect for the following purposes.</p>
              <h3>Provide and maintain the services</h3>
              <p>Using the information we collect, we are able to deliver the Services to you and honour our Terms of
                Service contract with you. For example, we need to use your information to provide you with your drynk
                dashboard tracking your alcohol intake, log, insights, and other trends; and to give you customer
                support.</p>
              <h3>Improve, personalise, and develop the services</h3>
              <p>We use the information we collect to improve and personalize the Services and to develop new ones. For
                example, we use the information to troubleshoot and protect against errors; perform data analysis and
                testing; conduct research and surveys; and develop new features and Services.</p>
              <p>We also use your information to make inferences and show you more relevant content.</p>
              <p>Here are some examples:</p>

              <ul>
                <li>Information like your height, weight, gender, and age allows us to improve the accuracy of your
                  alcohol intake, its effects, and recommendations to provide for insights.
                </li>
                <li>We may personalize intake and activity goals for you based on the goals you previously set and
                  your historical intake or activity data.
                </li>
              </ul>

              <h3>Communicate with you</h3>
              <p>We use your information when needed to send you Service notifications and respond to you when you
                contact us. We also use your information to promote new features or products that we think you would be
                interested in. You can control marketing communications and most Service notifications by using your
                notification preferences in account settings or via the “Unsubscribe” link in an email.</p>
              <h3>Promote safety and security</h3>
              <p>We use the information we collect to promote the safety and security of the Services, our users, and
                other parties. For example, we may use the information to authenticate users, facilitate secure
                payments, protect against fraud and abuse, respond to a legal request or claim, conduct audits, and
                enforce our terms and policies. </p>
            </section>

            <section>
              <h1>How information is shared</h1>
              <p>We never sell the personal information of our users. We do not share your personal information except
                in the limited circumstances described below.</p>
              <h2>When you agree or direct us to share</h2>
              <p>You may direct us to share your information in ways, for example, when you give a
                third-party application access to your account, or give your employer access to information when you
                choose to participate in an employee wellness program. Remember that their use of your information will
                be governed by their privacy policies and terms. You can revoke your consent to share with third-party
                applications or employee wellness programs using your account settings.</p>
              <h2>For external processing</h2>
              <p>We transfer information to our corporate affiliates, service providers, and other partners who process
                it for us, based on our instructions, and in compliance with this policy and any other appropriate
                confidentiality and security measures. These partners provide us with services globally, including for
                customer support, information technology, payments, sales, marketing, data analysis, research, and
                surveys.</p>
              <h2>For reasons to prevent harm</h2>
              <p>We may preserve or disclose information about you to comply with a law, regulation, legal process, or
                governmental request; to assert legal rights or defend against legal claims; or to prevent, detect, or
                investigate illegal activity, fraud, abuse, violations of our terms, or threats to the security of the
                Services or the physical safety of any person.</p>
              <p>Please note: Our policy is to notify you of legal process seeking access to your information, such as
                search warrants, court orders, or subpoenas, unless we are prohibited by law from doing so. In cases
                where a court order specifies a non-disclosure period, we provide delayed notice after the expiration of
                the non-disclosure period. Exceptions to our notice policy include exigent or counterproductive
                circumstances, for example, when there is an emergency involving a danger of death or serious physical
                injury to a person.</p>
              <p>We may share non-personal information that is aggregated or de-identified so that it cannot reasonably
                be used to identify an individual. We may disclose such information publicly and to third parties, for
                example, in public reports about exercise and activity, to partners under agreement with us, or as part
                of the community benchmarking information we provide to users of our subscription services.</p>
              <p>If we are involved in a merger, acquisition, or sale of assets, we will continue to take measures to
                protect the confidentiality of personal information and give affected users notice before transferring
                any personal information to a new entity.</p>
            </section>

            <section>
              <h1>Your rights to access and control your personal data</h1>
              <p>We give you account settings and tools to access and control your personal data, as described below,
                regardless of where you live. If you live in certain jurisdictions, you may have legal rights with
                respect to your information, which your account settings and tools allow you to exercise, as outlined
                below.</p>
              <h2>Accessing and exporting data</h2>
              <p>By logging into your account, you can access much of your personal information, including your
                dashboard with your insights and statistics. Using your account settings, you can also
                download information in a commonly used file format, including data about your alcohol intake,
                timelines, and personal information provided such as height, weight and sex.</p>
              <h2>Editing and deleting data</h2>
              <p>By logging into your account and using your account settings, you can change and delete your personal
                information. For instance, you can edit or delete the profile data you provide and delete your account
                if you wish.</p>
              <p>If you choose to delete your account, please note that while most of your information will be deleted
                within 30 days, it may take up to 90 days to delete all of your information, like the data stored in
                our backup systems. This is due to the size and complexity of the systems we use to store data.
                We may also preserve data for legal reasons or to prevent harm, including as described in the "How
                Information Is Shared" section.</p>
              <h2>Objecting to data use</h2>
              <p>We give you account settings and tools to control our data use. For example, through your privacy
                settings, you can limit how your information is visible to other users of the Services; using your
                notification settings, you can limit the notifications you receive from us; and under your application
                settings, you can revoke the access of third-party applications that you previously connected to your
                drynk account. You can also use the drynk application delete information and data from your account at
                any time.</p>
            </section>

            <section>
              <h1>Data retention</h1>
              <p>We keep your account information, like your name, email address, height, weight and sex, for as long as
                your
                account is in existence because we need it to operate your account. In some cases, when you give us
                information for a feature of the Services, we delete the data after it is no longer needed for the
                feature. For instance, when you provide your contact list for finding friends on the Services, we delete
                the list after it is used for adding contacts as friends. </p>
              <p>We keep other information, like your intake or activity data, until you use your account settings or
                tools to delete the data or your account because we use this data to provide you with your personal
                statistics and other aspects of the Services. We also keep information about you and your use of the
                Services for as long as necessary for our legitimate business interests, for legal reasons, and to
                prevent harm, including as described in the How We Use Information and How Information Is Shared
                sections.</p>
            </section>

            <section>
              <h1>Analytics and advertising services provided by others</h1>
              <p>We work with partners who provide us with analytics and advertising services. This includes helping us
                understand how users interact with the Services, serving advertisements on our behalf across the
                internet, and measuring the performance of those advertisements. These companies may use cookies and
                similar technologies to collect information about your interactions with the Services and other websites
                and applications. To learn more and about your privacy choices, please read our Cookie Use
                statement.</p>
            </section>

            <section>
              <h1>Our policies for children</h1>
              <p>We appreciate the importance of taking additional measures to protect children’s privacy.</p>
              <p>Persons under the age of 18, or any higher minimum age in the jurisdiction where that person resides,
                are not permitted to create accounts unless their parent has consented in accordance with applicable
                law. If we learn that we have collected the personal information of a child under the relevant minimum
                age without parental consent, we will take steps to delete the information as soon as possible. Parents
                who believe that their child has submitted personal information to us and would like to have it deleted
                may contact us at <a href={"mailto:privacy@syzible.com"}>privacy@syzible.com</a>.</p>
            </section>

            <section>
              <h1>Information security</h1>
              <p>We work hard to keep your data safe. We use a combination of technical, administrative, and physical
                controls to maintain the security of your data. This includes using Transport Layer Security (“TLS”) to
                encrypt many of our Services. No method of transmitting or storing data is completely secure, however.
                If you have a security-related concern, please contact Customer Support.</p>
            </section>

            <section>
              <h1>Our international operations and data transfers</h1>
              <p>We operate internationally and transfer information to the EU and other countries for the purposes
                described in this policy.</p>
              <p>We rely on multiple legal bases to lawfully transfer personal data around the world. These include your
                consent, the EU-US and Swiss-US Privacy Shield, and EU Commission approved model contractual clauses,
                which require certain privacy and security protections. You may obtain copies of the model contractual
                clauses by contacting us. Drynk complies with the Privacy Shield principles regarding the
                collection, use, sharing and retention of personal information as described in our Privacy Shield
                certifications.</p>
              <p>
                Please note that the countries where we operate may have privacy and data protection laws that differ
                from, and are potentially less protective than, the laws of your country. You agree to this risk when
                you create a drynk account and click “I agree” to data transfers, irrespective of which country you
                live in. For a list of the locations where we have offices, please see our company information here. If
                you later wish to withdraw your consent, you can delete your drynk account as described in the Your
                Rights To Access and Control Your Personal Data section.</p>
            </section>

            <section>
              <h1>European privacy disclosures</h1>
              <p>If you live in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, please review
                these additional privacy disclosures under the European Union’s General Data Protection Regulation
                (“GDPR”).</p>
              <h2>Your data controller</h2>
              <p>Edmond O'Flynn, an Irish sole trader, is your data controller and provides the Services if you live in
                the
                EEA, UK, or Switzerland. For our contact information, please see the Who We Are and How To Contact Us
                section.</p>
              <h2>Health and other special categories of personal data</h2>
              <p>To the extent that information we collect is health data or another special category of personal data
                subject to the GDPR, we ask for your explicit consent to process the data. We obtain this consent
                separately when you take actions leading to our obtaining the data, for example, when you pair your
                device to your account, grant us access to your intake or activity data from another service, or use
                health tracking features. You can use your account settings and tools to withdraw your consent
                at any time, including by stopping use of a feature, removing our access to a third-party service,
                unpairing your device, or deleting your data or your account.</p>
              <h2>Our legal bases for processing personal data</h2>
              <p>For personal data subject to the GDPR, we rely on several legal bases to process the data,
                including:</p>
              <ul>
                <li>When you have given your consent, which you may withdraw at any time using your account settings and
                  other tools;
                </li>
                <li>When the processing is necessary to perform a contract with you, like the Terms of Service; and</li>
                <li>Our legitimate business interests, such as in improving, personalizing, and developing the Services,
                  marketing new features or products that may be of interest, and promoting safety and security as
                  described in the How We Use Information section.
                </li>
              </ul>
              <h2>How to exercise your legal rights</h2>
              <p>Please review the Your Rights To Access and Control Your Personal Data section for how your account
                settings and tools allow you to exercise your rights under the GDPR to access and control your personal
                data.</p>
              <p>In addition to the various controls that we offer, in certain circumstances, you can seek to restrict
                our processing of your data, or object to our processing of your data based on our legitimate interests,
                including as described in the How We Use Information section. Under the GDPR, you have a general right
                to object to the use of your information for direct marketing purposes. Please see your notification
                settings to control our marketing communications to you about drynk products. Our Cookie Use statement
                describes your options for controlling how we and our partners use cookies and similar technologies for
                advertising. Please note that you can always delete your account at any time.</p>
              <p>If you need further assistance regarding your rights, please contact our Data Protection Officer at
                data-protection-office@syzible.com, and we will consider your request in accordance with applicable
                laws.
                You also have a right to lodge a complaint with your local data protection authority or with the Irish
                Data Protection Commission, our lead supervisory authority, whose contact information is available
                here.</p>
            </section>

            <section>
              <h1>California privacy disclosures</h1>
              <p>If you are a California resident, please review the following additional privacy disclosures under the
                California Consumer Privacy Act ("CCPA").</p>
              <h2>How to exercise your legal rights</h2>
              <p>You have the right to understand how we collect, use, and disclose your personal information, to access
                your information, to request that we delete certain information, and to not be discriminated against for
                exercising your privacy rights. You may exercise these rights using your account settings and tools as
                described in the Your Rights To Access and Control Your Personal Data section, for example:</p>
              <ul>
                <li>By logging into your account and using your account settings, you may exercise your right to access
                  your personal information and to understand how we collect, use, and disclose it.
                </li>
                <li>Your account settings also let you exercise your right to delete personal information.</li>
              </ul>
              <p>If you need further assistance regarding your rights, please contact our Data Protection Officer
                at <a href={"mailto:data-protection-office@syzible.com"}>data-protection-office@syzible.com</a>,
                and we will consider your request in accordance with applicable laws.</p>
              <p>We never sell the personal information of our users. We do work with partners who provide us with
                advertising services as described in the Analytics and Advertising Services Provided By Others section.
                To learn more about how these partners collect data and your options for controlling the use of your
                information for interest-based advertising, please read our Cookie Use statement</p>
            </section>

            <section>
              <h1>Who we are and how to contact us</h1>
              <p>If you have questions about this policy, or need help exercising your privacy rights, please contact
                our Data Protection Officer at <a href={"mailto:data-protection-officer@syible.com"}>
                  data-protection-office@syzible.com.</a>
              </p>
            </section>
          </div>
        </div>
      </Layout>
      <Footer/>
    </div>
  )
}

export default IndexPage
