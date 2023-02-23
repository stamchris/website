import React from "react";
import { Link } from 'react-router-dom';

const Policy = () =>
{
    return(
        <div className="flex flex-col items-center pt-16 pb-8 px-4 lg:px-16 bg-white">
              <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
            <div className="prose max-w-2xl text-gray-700">
                <p>
                  We take your privacy seriously and are committed to protecting your personal information when you use our soccer application (the "Application").
                </p>
        
                <h2 className="mt-8 font-bold">Information we collect</h2>
                <p>
                  When you use the Application, we may collect the following types of information:
                </p>
                <ul>
                  <li>Personal information: We may collect your name and email address when you sign up for an account.</li>
                  <li>Usage data: We may collect information about how you use the Application, such as the pages you visit and the actions you take.</li>
                  <li>Device information: We may collect information about the device you use to access the Application, such as the type of device and its unique identifier.</li>
                </ul>
        
                <h2 className="mt-8 font-bold">How we use your information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul>
                  <li>Provide and improve the Application;</li>
                  <li>Communicate with you about the Application and your account;</li>
                  <li>Respond to your inquiries and requests;</li>
                  <li>Enforce our policies and terms of use;</li>
                  <li>Comply with legal obligations.</li>
                </ul>
        
                <h2 className="mt-8 font-bold">Sharing of information</h2>
                <p>
                  We may share your information with third parties in the following circumstances:
                </p>
                <ul>
                  <li>With your consent;</li>
                  <li>To comply with legal obligations;</li>
                  <li>To protect our rights and property;</li>
                  <li>With service providers who help us operate the Application.</li>
                </ul>
        
                <h2 className="mt-8 font-bold">Data retention</h2>
                <p>
                  We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.
                </p>
        
                <h2 className="mt-8 font-bold">Security</h2>
                <p>
                  We use industry-standard security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure, so we cannot guarantee its absolute security.
                </p>
        
                <h2 className="mt-8 font-bold">Changes to this Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. If we make any material changes, we will notify you by email or by posting a notice in the Application prior to the change becoming effective. Your continued use of the Application after the effective date of the revised Privacy Policy constitutes your acceptance of the terms.
                </p>
        
                <h2 className="mt-8 font-bold">Contact us</h2>
                <p>
                  If you have any questions or concerns about our Privacy Policy, please contact us at
                  our email address support@soccergoal.com, or by writing to us at:

                        Soccer Goal, Inc.
                        123 Main St.
                        Anytown, USA 12345

                    we will respond to your inquiry as soon as possible.
                </p>    

                    <h2 className="mt-8 font-bold">Children's privacy</h2>
                    <p>
                    Our Application is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information without your consent, please contact us at support@soccergoal.com, and we will take steps to delete such information from our systems.
                    </p> 
                    <h2 className="mt-8 font-bold">Consent</h2>
                    <p>
                    By using the Application, you consent to our Privacy Policy.
                    </p>
                    <h2 className="mt-8 font-bold">Effective date</h2>
                    <p>
                    This Privacy Policy is effective as of February 23, 2023.
                    </p>
            </div>

            <Link to="/" className="text-blue-500 mt-8 hover:underline">Back to home</Link>
        </div>
        )
     }   


export default Policy