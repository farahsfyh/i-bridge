"use client";

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Container, Heading, Text, Button } from '@/components/ui';

export default function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-primary-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth
  }

  return (
    <div className="min-h-screen bg-primary-background">
      <Container className="py-8">
        {/* Header */}
        <div className="mb-8">
          <Heading level={1} className="text-3xl font-bold text-primary-text mb-2">
            Welcome to i-Bridge
          </Heading>
          <Text variant="muted" className="text-lg">
            Your dashboard for connecting with trusted local talent
          </Text>
        </div>

        {/* User Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <Heading level={2} className="text-xl font-semibold text-primary-text mb-2">
                Account Information
              </Heading>
              <Text variant="muted" className="mb-1">
                Email: {user.email}
              </Text>
              <Text variant="muted" className="mb-1">
                User Type: {user.user_metadata?.user_type || 'Not specified'}
              </Text>
              <Text variant="muted">
                Member since: {new Date(user.created_at).toLocaleDateString()}
              </Text>
            </div>
            <Button
              variant="outline"
              onClick={handleSignOut}
              className="text-red-600 border-red-200 hover:bg-red-50"
            >
              Sign Out
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl mb-4">🔍</div>
            <Heading level={3} className="text-lg font-semibold text-primary-text mb-2">
              Find Talent
            </Heading>
            <Text variant="muted" className="mb-4">
              Browse skilled professionals in your area
            </Text>
            <Button variant="primary" className="w-full">
              Browse Skills
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl mb-4">📝</div>
            <Heading level={3} className="text-lg font-semibold text-primary-text mb-2">
              Post a Job
            </Heading>
            <Text variant="muted" className="mb-4">
              Create a job posting to find the perfect match
            </Text>
            <Button variant="primary" className="w-full">
              Create Job
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-2xl mb-4">⭐</div>
            <Heading level={3} className="text-lg font-semibold text-primary-text mb-2">
              My Reviews
            </Heading>
            <Text variant="muted" className="mb-4">
              View and manage your reviews and ratings
            </Text>
            <Button variant="primary" className="w-full">
              View Reviews
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <Heading level={2} className="text-xl font-semibold text-primary-text mb-4">
            Recent Activity
          </Heading>
          <div className="text-center py-8">
            <div className="text-4xl mb-4">🎉</div>
            <Text variant="muted" className="text-lg">
              Welcome to i-Bridge! Start exploring to see your activity here.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
} 