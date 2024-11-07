// modules
import { useEffect, useState } from 'react'
// lib
import { checkIsAdmin } from '@/lib/utils/services'

export function useIsAdmin() {
	const [isAdmin, setIsAdmin] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchIsAdmin = async () => {
			try {
				const res = await checkIsAdmin()
				setIsAdmin(res)
			} catch (error) {
				console.error('Error checking admin status:', error)
			} finally {
				setLoading(false)
			}
		}

		fetchIsAdmin()
	}, [])

	return { isAdmin, loading }
}
