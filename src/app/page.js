// page.js
"use client";

import { useState, useEffect } from 'react';
import { supabase } from './supabase/client'; // Adjust the path based on your project structure
import HomeHeader from './home/home_header';
import ContactForm from './contact_form/contact_form';
import ContactOverview from './contact_overview/contact_overview';
import AllContacts from './view_all_contacts/all_contacts';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [currentView, setCurrentView] = useState('home');
  const [editingContact, setEditingContact] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchContacts();
  }, []);

  // Clear success message after 3 seconds
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching contacts:', error);
    } else {
      setContacts(data || []);
    }
  };

  const totalContacts = contacts.length;
  const activeContacts = contacts.filter(c => c.status === 'Active').length;
  const corporateContacts = contacts.filter(c => c.business_type === 'Corporate').length;
  const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const weeklyContacts = contacts.filter(c => new Date(c.created_at) >= oneWeekAgo).length;

  const handleAddContact = () => {
    setEditingContact(null);
    setCurrentView('form');
  };

  const handleViewContacts = () => {
    setCurrentView('all');
  };

  const handleEditContact = (contact) => {
    setEditingContact(contact);
    setCurrentView('form');
  };

  const handleDeleteContact = async (contactId) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', contactId);

      if (error) {
        console.error('Error deleting contact:', error);
      } else {
        await fetchContacts();
        setSuccessMessage('Contact deleted successfully!');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleSaveContact = async (contact) => {
    try {
      if (contact.id) {
        // Update existing contact
        const { error } = await supabase
          .from('contacts')
          .update({
            name: contact.name,
            phone: contact.phone,
            business_type: contact.business_type,
            status: contact.status,
            address: contact.address,
          })
          .eq('id', contact.id);

        if (error) {
          console.error('Error updating contact:', error);
        } else {
          setSuccessMessage('Contact updated successfully!');
        }
      } else {
        // Insert new contact
        const { error } = await supabase
          .from('contacts')
          .insert({
            name: contact.name,
            phone: contact.phone,
            business_type: contact.business_type,
            status: contact.status,
            address: contact.address,
          });

        if (error) {
          console.error('Error adding contact:', error);
        } else {
          setSuccessMessage('Contact added successfully!');
        }
      }

      await fetchContacts();
      setCurrentView('all'); // Navigate to all contacts after successful save
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const handleCancel = () => {
    setCurrentView('home');
  };

  // Success message component
  const SuccessMessage = () => {
    if (!successMessage) return null;

    return (
      <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        {successMessage}
      </div>
    );
  };

  switch (currentView) {
    case 'home':
      return (
        <>
          <SuccessMessage />
          <HomeHeader
            totalContacts={totalContacts}
            activeContacts={activeContacts}
            corporateContacts={corporateContacts}
            weeklyContacts={weeklyContacts}
            onAddContact={handleAddContact}
            onViewContacts={handleViewContacts}
          />
          <ContactOverview
            totalContacts={totalContacts}
            activeContacts={activeContacts}
            corporateContacts={corporateContacts}
            weeklyContacts={weeklyContacts}
            onAddContact={handleAddContact}
            onManageContacts={handleViewContacts}
          />
        </>
      );
    case 'form':
      return (
        <ContactForm
          onSave={handleSaveContact}
          onCancel={handleCancel}
          contact={editingContact}
        />
      );
    case 'all':
      return (
        <>
          <SuccessMessage />
          <AllContacts
            contacts={contacts}
            onBack={() => setCurrentView('home')}
            onAddContact={handleAddContact}
            onEditContact={handleEditContact}
            onDeleteContact={handleDeleteContact}
          />
        </>
      );
    default:
      return null;
  }
}